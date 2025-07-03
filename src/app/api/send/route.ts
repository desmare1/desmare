import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// FROM è l'indirizzo email da cui arriva la conferma di ricezione del preventivo al cliente
// ADMIN è l'indirizzo email a cui arrivano le richieste di preventivo
const FROM = `"${process.env.NEXT_PUBLIC_SITE_NAME}" <${process.env.FROM_EMAIL}>`;
const ADMIN = `"${process.env.NEXT_PUBLIC_SITE_NAME}" <${process.env.ADMIN_EMAIL}>`;

export async function POST(request: Request) {
  console.log('API Route: Inizio elaborazione richiesta');

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('API Route: RESEND_API_KEY mancante');
      return Response.json(
        { error: 'Configurazione API mancante' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;
    console.log('API Route: Dati ricevuti:', { name, email, phone, service });

    /* ---------- 1. conferma al cliente ---------- */
    const customerEmail = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'Conferma richiesta preventivo - De.Sma.Re',
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
            Gentile ${name},<br>
            Grazie per averci contattato!
          </h2>
          
          <p style="
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
            font-size: 16px;
          ">
            Abbiamo ricevuto la sua richiesta di preventivo e la contatteremo al più presto.
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
              Riepilogo della sua richiesta:
            </h4>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Tipologia di servizio:</strong> 
              <span style="color: #555; margin-left: 10px;">${service}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Messaggio:</strong>
            </div>
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
            background-color: #e8f5e8;
            border-left: 4px solid #067F38;
            padding: 20px;
            margin: 30px 0;
            border-radius: 4px;
          ">
            <p style="
              color: #2c3e50;
              margin: 0;
              font-size: 16px;
              font-weight: 600;
            ">
              Ti risponderemo al più presto.
            </p>
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
      text: `Gentile ${name}. Abbiamo ricevuto la sua richiesta di preventivo (${service}).`,
    });

    if (customerEmail.error) {
      console.error('API Route: Errore email cliente:', customerEmail.error);
    } else {
      console.log(
        'API Route: Email cliente inviata, ID:',
        customerEmail.data?.id,
      );
    }

    /* ---------- 2. notifica interna ---------- */
    const adminEmail = await resend.emails.send({
      from: FROM,
      to: [ADMIN],
      subject: `Nuova richiesta preventivo - ${service}`,
      replyTo: email,
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
            Nuova richiesta preventivo
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
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Telefono:</strong> 
              <span style="color: #555; margin-left: 10px;">${phone}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">Servizio:</strong> 
              <span style="color: #555; margin-left: 10px;">${service}</span>
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
              Richiesta preventivo ricevuta tramite desmare.it
            </p>
          </div>
        </div>`,
      text: `Preventivo da ${name} (${email}) – ${service}\n${message}`,
    });

    if (adminEmail.error) {
      console.error('API Route: Errore email admin:', adminEmail.error);
    } else {
      console.log('API Route: Email admin inviata, ID:', adminEmail.data?.id);
    }

    if (customerEmail.error || adminEmail.error) {
      return Response.json(
        { error: 'Errore nell’invio delle email' },
        { status: 500 },
      );
    }

    console.log('API Route: Tutte le email inviate con successo');
    return Response.json({ success: true });
  } catch (error) {
    console.error('API Route: Errore generale:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Errore sconosciuto' },
      { status: 500 },
    );
  }
}
