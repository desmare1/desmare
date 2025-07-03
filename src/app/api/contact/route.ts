import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// FROM è l'indirizzo email da cui arriva la conferma di ricezione del preventivo al cliente
// ADMIN è l'indirizzo email a cui arrivano le richieste di preventivo
const FROM = `"${process.env.NEXT_PUBLIC_SITE_NAME}" <${process.env.FROM_EMAIL}>`;
const ADMIN = `"${process.env.NEXT_PUBLIC_SITE_NAME}" <${process.env.ADMIN_EMAIL}>`;

export async function POST(request: Request) {
  console.log('Contact API: start');

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Contact API: RESEND_API_KEY mancante');
      return Response.json(
        { error: 'Configurazione API mancante' },
        { status: 500 },
      );
    }

    const { name, email, message } = await request.json();
    console.log('Contact API: dati ricevuti:', { name, email });

    /* ---------- 1. conferma al visitatore ---------- */
    const visitor = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'Messaggio ricevuto con successo – De.Sma.Re',
      html: /* html */ `
        <div style="
          font-family: Arial, sans-serif; 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: #ffffff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 600;
          ">
            Grazie per averci contattato!
          </h2>
          
          <p style="
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
            font-size: 16px;
          ">
            Gentile ${name}, abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.
          </p>
          
          <div style="
            background-color: #f8f9fa;
            border-left: 4px solid #067F38;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
          ">
            <h4 style="
              color: #2c3e50;
              margin-top: 0;
              margin-bottom: 15px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              font-weight: 600;
            ">
              Riepilogo del tuo messaggio:
            </h4>
            <blockquote style="
              margin: 0;
              padding: 0;
              color: #666;
              font-style: italic;
              line-height: 1.5;
              font-size: 15px;
            ">
              ${message}
            </blockquote>
          </div>
          
          <div style="
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          ">
            <p style="
              color: #555;
              margin: 0;
              line-height: 1.6;
              font-size: 16px;
            ">
              Cordiali saluti,<br>
              Il team <a href="https://desmare.it" style="
                color: #067F38;
                text-decoration: none;
                font-weight: 600;
              ">De.Sma.Re</a>
            </p>
          </div>
        </div>`,
      text: `Gentile ${name},\n\nabbiamo ricevuto il tuo messaggio:\n\n${message}\n\nTi risponderemo al più presto.\n\n– De.Sma.Re`,
    });

    /* ---------- 2. notifica interna ---------- */
    const admin = await resend.emails.send({
      from: FROM,
      to: [ADMIN],
      subject: `Nuovo messaggio – modulo contatti`,
      // se vuoi ri-abilitare il reply diretto, usa un alias verificato (es. reply@desmare.it)
      html: /* html */ `
        <div style="
          font-family: Arial, sans-serif; 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: #ffffff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        ">
          <h2 style="
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 600;
          ">
            Nuovo messaggio dal modulo contatti
          </h2>
          
          <div style="
            background-color: #f8f9fa;
            border-left: 4px solid #067F38;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
          ">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Nome:</strong> 
              <span style="color: #555; margin-left: 10px;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Email:</strong> 
              <span style="color: #555; margin-left: 10px;">${email}</span>
            </div>
          </div>
          
          <div style="
            background-color: #f8f9fa;
            border-left: 4px solid #067F38;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
          ">
            <h4 style="
              color: #2c3e50;
              margin-top: 0;
              margin-bottom: 15px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              font-weight: 600;
            ">
              Messaggio:
            </h4>
            <blockquote style="
              margin: 0;
              padding: 0;
              color: #666;
              line-height: 1.5;
              font-size: 15px;
            ">
              ${message}
            </blockquote>
          </div>
          
          <div style="
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          ">
            <p style="
              color: #777;
              margin: 0;
              font-size: 14px;
              font-style: italic;
            ">
              Messaggio ricevuto tramite il modulo contatti di desmare.it
            </p>
          </div>
        </div>`,
      text: `Nuovo messaggio:\n\nNome:  ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (visitor.error || admin.error) {
      console.error('Contact API: errori invio', visitor.error, admin.error);
      return Response.json(
        { error: 'Errore nell’invio email' },
        { status: 500 },
      );
    }

    console.log('Contact API: email inviate con successo');
    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact API: errore generale', err);
    return Response.json(
      { error: err instanceof Error ? err.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
