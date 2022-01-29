import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
    <Head>
      <title>Главная</title>
      <meta description="Привет с главной страницы"></meta>
      <meta keywords={"one, two, three, " + keywords}></meta>
    </Head>
      <div className="navbar">
        <A href={'/'} text="Главная"/>
        <A href={'/users'} text="Пользователи"/>
      </div>  
      <div>
        {children}
      </div> 
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }

        `}
      </style>   
    </>
  );
};

export default MainContainer;