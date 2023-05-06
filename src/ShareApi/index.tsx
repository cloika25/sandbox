import React from 'react';

export const ShareApiExample: React.FC = () => {
  const shareTextHandler = () => {
    navigator.share({
      text: 'example text',
      title: 'Песочница слойки',
    });
  };

  const shareLinkExample = () => {
    navigator.share({
      url: 'https://github.com/cloika25/sandbox',
      title: 'Песочница слойки',
      text: 'Небольшое описание',
    });
  };

  return (
    <div className="flex col space-x-2">
      <div>
        <button
          onClick={shareTextHandler}
          type="button"
        >
          Скопировать текст
        </button>
      </div>

      <div>
        <button
          onClick={shareLinkExample}
          type="button"
        >
          Скопировать ссылку
        </button>
      </div>
    </div>
  );
};
