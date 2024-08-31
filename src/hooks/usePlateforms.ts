import useData from "./UseData";

interface  Platform {
    id : number;
    name : string;
    slug : string;
}

const usePlateforms = () => useData <Platform> ('/platforms/lists/parents')

export default usePlateforms; 