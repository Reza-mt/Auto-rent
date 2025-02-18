export const AboutServices = () => {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="w-9/12 ">
        <div className="grid place-items-center rounded-2xl overflow-hidden relative">
          <img
            className="w-full h-60 md:h-72 object-cover"
            src="/image/dodge.png"
            alt="dodge"
          />
          <div className="flex flex-col -mt-96 items-center justify-center text-center p-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              چرا اتو رنت؟
            </h2>
            <p className="text-white text-sm md:text-base max-w-2xl">
            اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب خود را کرایه کرده و با آسودگی به سفر بروید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
