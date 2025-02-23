export const Header = ({ label, title }: { label: string; title: string }) => {
  return (
    <div className="text-center">
      <h4 className="fw-light fs-5">{label}</h4>
      <h2 className="display-4">{title}</h2>
      <span className="small_hr"></span>
    </div>
  );
};
