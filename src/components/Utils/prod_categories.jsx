import useFetch from "./useFetch";
import Title from "./title";
import ProductPreview from "./prod_preview";

export default function ProductCategories() {
  const { data, isPending, error } = useFetch("api/v1/product");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <>{data.map((item) => {
        return (
          <>
            <Title key={item.Category} title={item.Category} />
            <ProductPreview key={item.Category} Category={item.Category} />
          </>
        );
      })}</>}
    </div>
  );
}
