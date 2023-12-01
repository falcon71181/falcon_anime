"use client";
import React, { useEffect } from 'react';

const LoginForm = () => {
  useEffect(() => {
    const switchers = document.querySelectorAll('.switcher');

    const handleSwitcherClick = (event) => {
      switchers.forEach((item) => item.parentElement.classList.remove('is-active'));
      event.currentTarget.parentElement.classList.add('is-active');
    };

    switchers.forEach((item) => {
      item.addEventListener('click', handleSwitcherClick);
    });

    return () => {
      switchers.forEach((item) => {
        item.removeEventListener('click', handleSwitcherClick);
      });
    };
  }, []);
  return (
    <section className='forms-section'>
        <div className="forms">
            <div className="form-wrapper is-active">
                <button type="button" className="switcher switcher-login">
                    Login
                    <span className="underline"></span>
                </button>
                <div className="form-wrapper">
                    <form className="form form-login" method="POST" action={`${process.env.NEXT_PUBLIC_SERVER}/api/login`}>
                        <fieldset>
                            <legend>Please, enter your email and password for login.</legend>
                            <div className="input-block">
                                <label for="email">E-mail</label>
                                <input id="email" name="email" type="email" required="" placeholder="Email"></input>
                            </div>
                            <div className="input-block">
                                <label for="password">Password</label>
                                <input id="password" name="password" type="password" required="" placeholder="Password"></input>
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                </div>
            </div>
            <div className="form-wrapper">
                <button type="button" className="switcher switcher-signup">
                    Sign Up
                    <span className="underline"></span>
                </button>
                <div className="form-wrapper">
                    <form className="form form-signup" method="POST" action={`${process.env.NEXT_PUBLIC_SERVER}/api/register`}>
                        <fieldset>
                            <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                            <div className="input-block">
                                <label for="email">E-mail</label>
                                <input id="email" name="email" type="email" required="" placeholder="Enter Email"></input>
                            </div>
                            <div className="input-block">
                                <label for="password">Password</label>
                                <input id="password" name="password" type="password" required="" placeholder="Create Password"></input>
                            </div>
                            <div className="input-block">
                                <label for="password2">Confirm password</label>
                                <input id="password2" name="password2" type="password" required="" placeholder="Confirm Password"></input>
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-signup">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
)};

export default LoginForm;
