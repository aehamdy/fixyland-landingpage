function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between w-full py-1 px-5xl md:px-6xl lg:px-12xl text-tiny md:text-base text-content-muted bg-surface-dark-alt">
      <p className="">Copyright {currentYear} FixyLand. All rights reserved.</p>

      <div className="flex items-center gap-2">
        <a href="#" className="hover:text-content-light duration-300">
          Terms & Conditions
        </a>

        <span className="">|</span>

        <a href="#" className="hover:text-content-light duration-300">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default BottomBar;
