interface ButtonProps {
  btn_txt: string;
}

export default function Button({ btn_txt }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {btn_txt}
      </button>
    </>
  );
}
