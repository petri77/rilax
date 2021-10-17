function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-2 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest text-xs">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
