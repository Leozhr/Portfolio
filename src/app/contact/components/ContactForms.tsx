import { theme } from '@/styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import zod from 'zod';

const ContactFormsStyle = styled.header`
  padding: 80px 20px;

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;

    span {
      color: ${theme.color.flare};
    }
  }

  form {
    display: flex;
    gap: 20px;
    flex-direction: column;

    div {
      display: flex;
      gap: 3px;
      flex-direction: column;
      width: 100%;

      p {
        font-size: 12px;
        color: red;
      }
    }

    input, textarea {
      padding: 15px 20px;
      background-color: #E1E1E1;
      outline: none;
      border: none;
      font-size: 16px;
      resize: none;

      &::placeholder {
        color: ${theme.color.flare};
      }
    }

    button {
      padding: 15px 20px;
      background-color: ${theme.color.dark};
      color: ${theme.color.light};
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 50px;
    }
  }
`

const ContactForms = () => {
  const dataSchema = zod.object({
    name: zod.string().nonempty(),
    email: zod.string().nonempty(),
    message: zod.string().nonempty(),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(dataSchema),
  })

  type CreateUserFormData = zod.infer<typeof dataSchema> 

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <ContactFormsStyle>
      <h1>Contate <span>me</span></h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Nome" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input type="text" placeholder="E-mail" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <textarea rows={5} cols={50} placeholder="Mensagem" {...register('message')} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </ContactFormsStyle>
  )
}

export { ContactForms };

