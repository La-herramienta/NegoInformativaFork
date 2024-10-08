"use client";
const UploadPDFFichaTecnica = ({ FilePDF, setFilePDF }) => {
  const allowedTypes = [
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFilePDF(selectedFile);
    } else {
      alert("Tipo de archivo no permitido.");
      setFilePDF(null);
    }
  };

  return (
    <div className="w-full mx-auto">
      <label className="w-64 mx-auto flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          {FilePDF?.name || "Selecciona tu archivo"}
        </span>
        <input
          type="file"
          onChange={handleChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default UploadPDFFichaTecnica;
