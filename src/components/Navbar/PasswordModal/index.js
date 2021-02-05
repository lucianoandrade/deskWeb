import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';
import Load from '../../../assets/images/load.gif';
import { UsersService } from '../../../services/api/users.service';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const usersService = new UsersService();

const Title = styled.h4`
  margin-top: -24px;
  margin-bottom: 24px;
  /* title / H4 */
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  /* Black */
  color: #222222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    /* form / Label */
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    /* Black */
    color: #222222;
    margin-bottom: 4px;
  }
  div.input {
    margin-bottom: 24px;
  }
  input {
    padding: 14px 16px;
    background: #ffffff;
    /* Gray / 03 */
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
    border-radius: 3px;
    &.error {
      border: 1px solid #ef3737;
    }
  }
  span.error {
    margin-top: -24px;
    margin-bottom: 24px;
    /* text / Small */
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */

    /* Red */
    color: #ef3737;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-start;

  > * {
    margin-right: 16px;
  }

  button {
    padding: 14px 12px;
    border-radius: 3px;
    border: none;
    /* form / Button */
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */
    text-align: center;

    /* Gray / 01 */
    color: #465a78;

    /* BG */
    background: #f1f5fa;
    border-radius: 3px;
    &.primary {
      background: #1269eb;
      color: #ffffff;
    }
    &[disabled] {
      opacity: 0.8;
    }
  }

  img {
    height: 14px;
    margin: 0px 16px;
  }
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #666666;
  border: 1px solid transparent;
  border-radius: 3px;
  background: transparent;
  transition: all 100ms ease-in;
  &:hover {
    border: 1px solid lightgray;
  }
`;

const PasswordInput = ({ ...props }) => {
  const [hide, setHide] = useState(true);
  return (
    <div className='input' style={{ position: 'relative' }}>
      <input
        type={hide ? 'password' : 'text'}
        style={{ width: '100%' }}
        {...props}
      />
      <ShowPasswordButton type='button' onClick={() => setHide(!hide)}>
        {hide ? <FaRegEyeSlash /> : <FaRegEye />}
      </ShowPasswordButton>
    </div>
  );
};

export const PasswordModal = ({ open, setOpen }) => {
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newPwConfirm, setNewPwConfirm] = useState('');
  const [newPwConfirmError, setNewPwConfirmError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (newPw !== newPwConfirm) {
      setNewPwConfirmError('Nova senha deve ser igual nos dois campos');
      return;
    }
    setLoading(true);
    try {
      await usersService.changePassword(oldPw, newPw);
      setOpen(false);
    } catch (e) {
      switch (e.message) {
        case 'Network Error':
          toast.error('Erro de conexão');
          break;
        default:
          toast.error(e.response?.data?.message || e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <Modal open setOpen={setOpen} stylewidth='464px'>
      <Title>Alterar senha</Title>
      {
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor='OldPassword'>Senha atual:</label>
          <PasswordInput
            required
            id='OldPassword'
            name='OldPassword'
            value={oldPw}
            onChange={(e) => setOldPw(e.target.value)}
            placeholder={`Sua senha`}
          />
          <label htmlFor='NewPassword'>Nova senha:</label>
          <PasswordInput
            required
            id='NewPassword'
            name='NewPassword'
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            onFocus={() => setNewPwConfirmError('')}
            placeholder={`Nova senha`}
          />
          <label htmlFor='NewPasswordConfirm'>Repetir a senha nova:</label>
          <PasswordInput
            required
            id='NewPasswordConfirm'
            name='NewPasswordConfirm'
            value={newPwConfirm}
            onChange={(e) => setNewPwConfirm(e.target.value)}
            onFocus={() => setNewPwConfirmError('')}
            placeholder={`Repita sua senha`}
            className={newPwConfirmError ? 'error' : ''}
          />
          {newPwConfirmError && (
            <span className='error'>{newPwConfirmError}</span>
          )}
          <FormActions>
            <button type='submit' disabled={loading} className='primary'>
              {loading ? <img alt='loading' src={Load} /> : 'Confirmar'}
            </button>
            <button type='button' onClick={() => setOpen(false)}>
              Cancelar
            </button>
          </FormActions>
        </Form>
      }
    </Modal>
  );
};
