import React from 'react';

export default function AlertMessage({ type = 'success', message = '', onClose }) {
  if (!message) return null;

  let alertClass = 'alert alert-outline ';
  if (type === 'success') alertClass += 'alert-success';
  else if (type === 'warning') alertClass += 'alert-warning';
  else if (type === 'error') alertClass += 'alert-error';
  else alertClass += 'alert-info';

  return (
    <div role="alert" className={`${alertClass} flex justify-between items-center`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-sm underline">
        Close
      </button>
    </div>
  );
}
