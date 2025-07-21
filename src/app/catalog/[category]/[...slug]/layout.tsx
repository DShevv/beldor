import SubcategoryLayout from "@/blocks/SubcategoryLayout/SubcategoryLayout";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string; slug: string[] }>;
}) => {
  const { category, slug } = await params;

  console.log(category, slug);

  if (slug[slug.length - 1] === "1") {
    return (
      <SubcategoryLayout category={category} slug={slug}>
        {children}
      </SubcategoryLayout>
    );
  }

  return <>{children}</>;
};

export default layout;
