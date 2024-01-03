export function sanitizeString(str: string) {

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


  return str.replace(specialChars, '');
}