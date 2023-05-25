import krubbsIcon from "./assets/images/krubbs.png";

function ErrorPage() {
  return (
    <h1 className="h-screen flex items-center justify-center gap-2 flex-col  md:flex-row">
      <div className="w-20 h-20">
        <img src={krubbsIcon} alt="img" />
      </div>
      <span className="font-bold text-krubbsBlue text-4xl">
        page not found ☹
      </span>
    </h1>
  );
}

export default ErrorPage;
