<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <script src="https://kit.fontawesome.com/fd0149b301.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>

<body>

    <header id="main-header">

        <img class="logo" src="../images/logo1.png" alt="logo">

    </header>
    <div class="page-wrapper">
        <div class="welcome-text">
            <h1>Prima di entrare nel sito effettua l'accesso</h1>
        </div>

        <div class="login-registration">
            <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle-button" onclick="login()">Log in</button>
                    <button type="button" class="toggle-button" onclick="register()">Registrati</button>
                </div>
                <form id="login" class="input-group" action="validation.php" method="post" >
                    <input type="text" class="input-field" placeholder="Username" name="username" required>
                    <input type="password" class="input-field" placeholder="Password" name="password" required>
                    <button type="submit" class="submit-btn" name="login">Continua</button>
                </form>
                <form id="register" class="input-group" action="register.php" method="post" >
                    <input type="text" class="input-field" placeholder="Username" name="username" required>
                    <input type="email" class="input-field" placeholder="Email" name="email" required>
                    <input type="password" class="input-field" placeholder="Password" name="password" required>
                    <button type="submit" class="submit-btn" name="register">Registrati</button>
                </form>
            </div>
        </div>
    </div>

    <div class="footer-main">

        <div class="footer-social">
            <ul>
                <li><a href="#" target="blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" target="blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" target="blank"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#" target="blank"><i class="fa fa-youtube"></i></a></li>
            </ul>
        </div>

        <div class="footer-text">
            <h6>&copy; Copyright 2020 HTML.am</h6>
        </div>

    </div>

    <script src='../js/login.js'></script>

</body>

</html>
