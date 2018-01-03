// @flow
import * as React from 'react'
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormAlert } from 'misago/components/Form'

type Props = {
  onHide: () => void
}

class SignInForm extends Form<FormProps & Props, FormState> {
  onUsernameChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    this.onChange('username', ev.currentTarget.value)
  }

  onPasswordChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    this.onChange('password', ev.currentTarget.value)
  }

  render() {
    const { onHide } = this.props
    const { data, errors, isSubmitting } = this.state

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <ModalHeader toggle={onHide}>
            {gettext('Sign in')}
          </ModalHeader>
          <ModalBody>

            <FormAlert errors={errors} />

            <div className="form-group">
              <div className="control-input">
                <input
                  className="form-control input-lg"
                  disabled={isSubmitting}
                  id="id_username"
                  placeholder={gettext('Username or e-mail')}
                  type="text"
                  value={data.username}
                  onChange={this.onUsernameChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="control-input">
                <input
                  className="form-control input-lg"
                  disabled={isSubmitting}
                  id="id_password"
                  placeholder={gettext('Password')}
                  type="password"
                  value={data.password}
                  onChange={this.onPasswordChange}
                />
              </div>
            </div>

          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary btn-block">
              {gettext('Sign in')}
            </button>
          </ModalFooter>
        </form>
      </React.Fragment>
    )
  }
}

export default SignInForm