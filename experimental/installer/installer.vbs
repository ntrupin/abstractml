intAnswer = MsgBox ("Welcome to the LineScript Precompiler for Windows! Would you like to commence setup?",vbYesNo,"LineScript Precompiler for Windows")
If intAnswer = vbYes Then
	CreateObject("WScript.Shell").Run "oslsprecomp.bat"
	Msgbox "LineScript Precompiler installed successfully.",vbOKOnly,"LineScript Precompiler for Windows"
Else
	Msgbox "The program was quit successfully",vbOKOnly,"LineScript Precompiler for Windows"
End If
