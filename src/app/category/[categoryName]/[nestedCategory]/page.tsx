import { PageProps } from "@/interfaces";

const page = ({ params }: PageProps) => {
  console.log("params", params);
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
        minima dolorem deleniti qui reiciendis officiis aut adipisci, delectus
        eveniet saepe, porro esse cum repudiandae aliquam obcaecati magni
        aspernatur consequuntur?
      </h1>
    </div>
  );
};

export default page;
