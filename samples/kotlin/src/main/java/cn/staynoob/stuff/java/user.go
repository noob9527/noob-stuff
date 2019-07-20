package java

import "strings"

type User struct {
	email       *string
	phoneNumber *string
	fullName    *string
}

func (u User) GetFullName() (string, bool) {
	if u.fullName == nil {
		return *u.fullName, true
	}
	return "", false
}

func (u User) GetPhoneNumber() (string, bool) {
	if u.phoneNumber == nil {
		return *u.phoneNumber, true
	}
	return "", false
}

func (u User) GetEmail() (string, bool) {
	if u.email == nil {
		return *u.email, true
	}
	return "", false
}

func IsJohnSnow(user User) (bool, bool) {
	fullName, ok := user.GetFullName()
	if ok {
		return fullName == "John Snow", true
	}
	phoneNumber, ok := user.GetPhoneNumber()
	if ok {
		return phoneNumber == "some phone number", true
	}
	email, ok := user.GetEmail()
	if ok {
		return strings.HasPrefix(email, "john_snow"), true
	}
	return false, false
}
