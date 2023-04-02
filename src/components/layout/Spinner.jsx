import loading from "./assets/loading.gif"

function Spinner() {
  return (
   <div className="w-100 mt-20">
    <img width={180} src={loading} alt="Loading..." className="text-center mx-auto" />
   </div>
  )
}
export default Spinner