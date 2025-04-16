import { Button } from "./ui/button";
import { Input } from "./ui/input";

const GenerateFormInput = () => {
  return (
    <div className="flex items-center gap-4 my-8">
      <Input placeholder="Type your prompt: e.g., 'Job application form for a startup" />
      <Button>Generate Form</Button>
    </div>
  );
};

export default GenerateFormInput;
