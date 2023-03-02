const TabButton = ({ title, selectedTab, toggleSelectedTab, position }) => {
  return (
    <button
      className={selectedTab === title ? `active ${position}` : position}
      onClick={() => toggleSelectedTab(title)}
    >
      {title}
    </button>
  );
};

export default TabButton;
