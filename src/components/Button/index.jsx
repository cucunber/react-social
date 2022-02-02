import s from "./styles.module.scss";

/*
    так как props это объект, то можно произвести так скажем деструктуризацию объекта, что это такое, допустим,
    у нас есть объект props с полями text, theme, disabled:
    props = {
        text: '123',
        theme: 'yellow',
        disabled: false,
    }
    Мы можем получить каждое из этих полей следующим образом:
    const {text, theme, disabled} = props
    Js в данном случае возьмет из объекта props каждое поле с таким же именем и присвоет ему значение те 
    const text = props.text
    const theme = props.theme
    const disabled = props.disabled
    Запись theme="yellow" задает значение по умолчанию, ведь если мы оставим проп theme пустым, то оно будет undefined и из-за 
    этого могут быть ошибки

*/
const Button = ({text, theme="yellow", className="", disabled=false, textTransform="uppercase"}) => {

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
          textTransform
      }}
      /*
       это выражение позволяет нам "склеивать строки", те если у нас есть классы button theme className, то это все соберется в 
       "button theme className"
       */
      className={`${s.button} ${s[theme]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;