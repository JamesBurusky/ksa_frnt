import Prod from "./prod";
import useFetch from "./useFetch";

const ProductPreview = (Category) => {
  const { data, isPending, error } = useFetch(
    `product/categories/${Category.Category}`
  );

  return (
    <div className="productPreview">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          {data.rows.map((item) => {
           
            return (
              <Prod
                key={item.ProductID}
                id={item.ProductID}
                name={item.Name}
                description={item.Description}
                price={item.Price}
                img={item.Image1}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProductPreview;
