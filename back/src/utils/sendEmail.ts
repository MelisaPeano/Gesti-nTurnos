import nodemailer from "nodemailer"



const sendEmail = (name: string, email: string, text: string) => {
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "959180ba4ce66f",
          pass: "df90aab636983e"
        }
      });
    const mailOptions = {
        from: 'melisaprogramming20@gmail.com',
        to: email,
        subject: 'Registro exitoso',
        text: text
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
    }
    )
}


export default sendEmail;