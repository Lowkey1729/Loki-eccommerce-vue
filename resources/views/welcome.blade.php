<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('/css/app.css')}}">


    <style>
    body {
        font-family: 'Nunito', sans-serif;
    }
    </style>
</head>

<body class=" text-black  antialiased">
    <div id="app">
    <navbar-component></navbar-component>

        <router-view></router-view>
    <footer-component></footer-component>
    <div>

</body>

</html>

<script src="/js/app.js"></script>
