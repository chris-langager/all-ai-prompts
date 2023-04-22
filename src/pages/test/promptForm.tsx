export default function PromptForm() {
  return (
    <div className="">
      <div className="">
        <form className="">
          <div>
            <label htmlFor="text" className="">
              Text
            </label>
            <input id="text" name="text" type="text" required className="" />
          </div>

          <div>
            <label htmlFor="tags" className="">
              Tags
            </label>
            <input id="tags" name="tag" type="text" required className="" />
          </div>

          <div>
            <button type="submit" className="">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
