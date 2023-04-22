import { type NextPage } from "next";

import { api } from "~/utils/api";
import PromptForm from "./promptForm";

interface Prompt {
  text: string;
  tags: string[];
}

const TestPage: NextPage = () => {
  const prompts = api.prompts.list.useQuery();

  return (
    <div>
      {prompts.data?.map((prompt) => (
        <Prompt prompt={prompt} />
      ))}
      <hr />
      <PromptForm />
    </div>
  );
};

export default TestPage;

interface PromptProps {
  prompt: Prompt;
}

const Prompt: React.FC<PromptProps> = ({ prompt }) => {
  return (
    <div className="border-2 border-solid border-indigo-600 p-1">
      <div className="p-1">{prompt.text}</div>
      <Tags tags={prompt.tags} />
    </div>
  );
};

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="flex gap-2 p-1">
      {tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </div>
  );
};

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <div className="border-2 border-solid border-indigo-600 p-1">{tag}</div>
  );
};
