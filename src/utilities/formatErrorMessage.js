export const formatErrorMessage = (errors) => {
    const errorKeys = Object.keys(errors);
    let errorMessage = "";
    errorKeys.forEach(key => {
      errorMessage += `${key} ${errors[key]}`
    })
    return errorMessage;
}