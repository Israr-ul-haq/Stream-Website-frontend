import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
// import crossImage from "../images/dashboard/icons/cross-image.png";
const DeleteItem = async (id, data, service, title, setLoader, removItem) => {
  debugger;
  Swal.fire({
    title: "Are you sure, you want to delete " + title + "?",
    showCancelButton: true,
    confirmButtonText: `Delete`,
    showCloseButton: true,
    // closeButtonHtml: `<img src=${crossImage} alt="crossicon" className="popupcrossimage"/>`,
    reverseButtons: true,
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      setLoader(true);
      let removeIndex = data
        .map((item) => {
          if (removItem === "Users") {
            return item.id;
          }
        })
        .indexOf(id);
      data.splice(removeIndex, 1);
      debugger;
      try {
        const response = await service(id);
        debugger
        if (response.status === 200) {
          toast.success(response.data);
          setLoader(false);
        } else {
          toast.error(response.data);
        }
      } catch (error) {
        setLoader(false);
      }
    } else if (result.isDenied) {
      toast.error("Changes are not saved", "", "info");
      setLoader(false);
    }
  });
};

export default DeleteItem;
