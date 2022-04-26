import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()

    onUpdateAvatar({
      avatar: ref.current.value
    })
  }

  React.useEffect(() => {
    ref.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name='avatar'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Обновить аватар'
      buttonText='Сохранить'
    >
      <input className='form__input' ref={ref} required id='avatar-input' name='avatar' type='url' placeholder='Cсылка на новый аватар' />
      <span id='avatar-error' className='form__error'></span>
    </PopupWithForm>
  )
}
export default EditAvatarPopup