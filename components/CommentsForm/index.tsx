import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../../services';

type Props = {
  slug: string;
};

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
      nameEl.current.value = name;
      emailEl.current.value = email;
    }
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const comment = commentEl.current?.value;
    const name = nameEl.current?.value;
    const email = emailEl.current?.value;
    const storeData = storeDataEl.current?.checked;

    if (!comment || !name || !email) {
      setError(true);
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name ? name : '');
      localStorage.setItem('email', email ? email : '');
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 3000);
    });
  };

  return (
    <div className="roundedlg mb-8 bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8  border-b pb-4 text-xl font-semibold">
        Comments Form
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          placeholder="Comentario"
          name="comment"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        ></textarea>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          ref={nameEl}
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          ref={emailEl}
          type="text"
          name="email"
          placeholder="Email"
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div className="">
          <input
            ref={storeDataEl}
            type="checkbox"
            name="storeDate"
            id="storeData"
          />
          <label
            htmlFor="storeData"
            className="ml-2 cursor-pointer text-gray-500"
          >
            Guardar mi e-mail y nombre para la proxima vez que realice un
            comentario.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">Todos los campos son requiridos</p>
      )}
      <div className="mt-8">
        <button
          className="inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg text-white hover:bg-indigo-900"
          type="button"
          onClick={handleCommentSubmission}
        >
          Enviar Commentario
        </button>
        {showSuccessMsg && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comentario enviado para revisión
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
