interface EmailTemplateProps {
  email: string,
  name: string,
  message: string
}

const EmailTemplate = ({ email, name, message }: EmailTemplateProps) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
      <br />
      <p>{message}</p>
    </div>
  )
}

export { EmailTemplate };

