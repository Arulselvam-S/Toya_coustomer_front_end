export default function PageContainer({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) {
  return (
    <Component
      className={`toya-page-container toya-page-container-${size} ${className}`}
    >
      {children}
    </Component>
  );
}