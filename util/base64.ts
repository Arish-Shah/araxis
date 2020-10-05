const base64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const content = (reader.result as string).split(';base64,')[1];

      resolve({
        filename: file.name,
        content,
        encoding: 'base64',
      });
    };
    reader.onerror = (error) => reject(error);
  });
};

export default base64;
