

export default function ErrorMessage({errorMessage}:{errorMessage:string}) {
  return (
    <div>
         <p
            className="text-sm text-red-600 mt-2"
            id="hs-validation-name-error-helper"
          >
            {errorMessage}
          </p>
    </div>
  )
}
