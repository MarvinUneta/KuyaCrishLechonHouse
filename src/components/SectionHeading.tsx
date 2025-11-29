type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="description">{description}</p> : null}
    </div>
  );
};

