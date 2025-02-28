const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-primary text-primary-content p-12">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default AuthImagePattern;
