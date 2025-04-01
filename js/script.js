// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTrapezoid () {
  // input
  const BaseAOfTrapezoid  = parseFloat(document.getElementById('Base-a-of-trapezoid').value)
  const BaseBOfTrapezoid = parseFloat(document.getElementById('Base-b-of-trapezoid').value)
  const heightOfTrapezoid = parseFloat(document.getElementById('height-of-trapezoid').value)

  // process
  const AreaOfTrapezoid = [(BaseAOfTrapezoid + BaseBOfTrapezoid) / 2] * heightOfTrapezoid

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + AreaOfTrapezoid + ' mm²'
}
