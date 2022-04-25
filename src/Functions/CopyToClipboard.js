export function copyToClipboard(value, setTitle) {
  if (value.length > 0) {
    setTitle("Скопированно!!");
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setTitle("Генератор случайного пароля");
    }, 1000);
  }
}
