import styles from "./MenuButton.module.scss";

export const MenuButton = () => {
  return (
    <button className="text-white text-2xl font-bold w-[58px] h-[58px] flex items-center justify-center border rounded-2xl border-solid duration-300 transition-colors border-[rgba(255,255,255,.4)]  hover:border-white">
      <span className={styles.burgerLine} />
    </button>
  );
};
