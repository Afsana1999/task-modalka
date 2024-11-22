
import useCustomFetch from "../hooks/useCustomFetch";

function MyBlog() {
  const { data,loading,error } = useCustomFetch();
  if (loading) return <div>...yuklenir</div>;
  if (error) return <div>error varr {error}</div>;
  const detailsarr = data.flatMap((group) => group.details);
  console.log(detailsarr);
  
  return (
    <div style={{ width: "50%" }}>
      {detailsarr.map((item) => (
        <div>iddd {item.productId}</div>
      ))}
    </div>
  );
}

export default MyBlog;
