// @flow
import * as React from 'react'
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as Form from 'misago/components/Form'

type Props = {
  onHide: () => void
}

class SignInForm extends React.Component<Props & Form.Props> {
  onUsernameChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange('username', ev.currentTarget.value)
  }

  onPasswordChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange('password', ev.currentTarget.value)
  }

  render() {
    const { data, errors, isSubmitting, onHide, onSubmit } = this.props

    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
          <ModalHeader toggle={onHide}>
            {gettext('Sign in')}
          </ModalHeader>
          <ModalBody>

            <Form.Alert errors={errors} />

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

const EnhancedSignInForm = (props: Props & Form.WrapperProps) => {
  return (
    <Form.Component component={SignInForm} {...props} />
  )
}

export default EnhancedSignInForm
export { SignInForm }