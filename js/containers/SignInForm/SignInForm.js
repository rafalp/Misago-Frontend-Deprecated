// @flow
import React from 'react'
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form } from 'misago/components/Form'

class SignInForm extends Form {
  onUsernameChange = (ev) => {
    this.onChange('username', ev.target.value)
  }

  onPasswordChange = (ev) => {
    this.onChange('password', ev.target.value)
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

            <div className="alert alert-danger" role="alert">
              {errors.__all__ ? errors.__all__[0] : ''}
            </div>

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