import Icon from "./common/Icon";

type UserActionProps = {
  toggleNavMenu: () => void;
};

function UserActions({ toggleNavMenu }: UserActionProps) {
  return (
    <div className="flex justify-between items-center gap-4">
      <button className="p-2 bg-white/20 text-white rounded-full hover:scale-110 transition-all cursor-pointer">
        <Icon name="magnifying-glass" />
      </button>

      <button
        onClick={toggleNavMenu}
        className="flex md:hidden p-2 bg-white/20 text-white rounded-full hover:scale-110 transition-all cursor-pointer"
      >
        <Icon name="menu" />
      </button>

      <button className="hidden md:flex items-center gap-2 py-sm px-sm text-content-dark bg-accent-secondary rounded-medium hover:scale-105 transition-all cursor-pointer">
        Book Your Stay <Icon name="arrow-up-right" />
      </button>
    </div>
  );
}

export default UserActions;
