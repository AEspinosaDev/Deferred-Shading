#pragma once
#include <glm/glm.hpp>


const int maskSize9 = 9;
const glm::vec2 texIdx9[maskSize9] = {
	glm::vec2(-1.0, 1.0),glm::vec2(0.0, 1.0),glm::vec2(1.0, 1.0),
	glm::vec2(-1.0, 0.0), glm::vec2(0.0, 0.0), glm::vec2(1.0, 0.0),
	glm::vec2(-1.0, -1.0),glm::vec2(0.0, -1.0), glm::vec2(1.0, -1.0) };
const float maskFactor9 = float(1.0 / 18.0);
const float mask9[maskSize9] = {
	float(1.0 * maskFactor9), float(2.0 * maskFactor9), float(1.0 * maskFactor9),
	float(2.0 * maskFactor9), float(2.0 * maskFactor9), float(2.0 * maskFactor9),
	float(1.0 * maskFactor9), float(2.0 * maskFactor9), float(1.0 * maskFactor9) };


const int maskSize25 = 25;
const glm::vec2  texIdx25[maskSize25] = {
	glm::vec2(-2.0, 2.0), glm::vec2(-1.0, 2.0), glm::vec2(0.0, 2.0), glm::vec2(1.0, 2.0), glm::vec2(2.0, 2.0),
	glm::vec2(-2.0, 1.0), glm::vec2(-1.0, 1.0), glm::vec2(0.0, 1.0), glm::vec2(1.0, 1.0), glm::vec2(2.0, 1.0),
	glm::vec2(-2.0, 0.0), glm::vec2(-1.0, 0.0), glm::vec2(0.0, 0.0), glm::vec2(1.0, 0.0), glm::vec2(2.0, 0.0),
	glm::vec2(-2.0, -1.0), glm::vec2(-1.0, -1.0), glm::vec2(0.0, -1.0), glm::vec2(1.0, -1.0), glm::vec2(2.0, -1.0),
	glm::vec2(-2.0, -2.0), glm::vec2(-1.0, -2.0), glm::vec2(0.0, -2.0), glm::vec2(1.0, -2.0), glm::vec2(2.0, -2.0)};
const float maskFactor25 = float(1.0 / 65.0);
const float mask25[maskSize25] = {
	1.0 * maskFactor25, 2.0 * maskFactor25, 3.0 * maskFactor25, 2.0 * maskFactor25, 1.0 * maskFactor25,
	2.0 * maskFactor25, 3.0 * maskFactor25, 4.0 * maskFactor25, 3.0 * maskFactor25, 2.0 * maskFactor25,
	3.0 * maskFactor25, 4.0 * maskFactor25, 5.0 * maskFactor25, 4.0 * maskFactor25, 3.0 * maskFactor25,
	2.0 * maskFactor25, 3.0 * maskFactor25, 4.0 * maskFactor25, 3.0 * maskFactor25, 2.0 * maskFactor25,
	1.0 * maskFactor25, 2.0 * maskFactor25, 3.0 * maskFactor25, 2.0 * maskFactor25, 1.0 * maskFactor25 };


const int maskSize49 = 49;
const glm::vec2 texIdx49[maskSize49] = {
	glm::vec2(-3.0, 3.0),glm::vec2(-2.0, 3.0),glm::vec2(-1.0, 3.0), glm::vec2(0.0, 3.0), glm::vec2(1.0, 3.0),glm::vec2(2.0, 3.0), glm::vec2(3.0, 3.0),
	glm::vec2(-3.0, 2.0), glm::vec2(-2.0, 2.0), glm::vec2(-1.0, 2.0), glm::vec2(0.0, 2.0),glm::vec2(1.0, 2.0), glm::vec2(2.0, 2.0), glm::vec2(3.0, 2.0),
	glm::vec2(-3.0, 1.0), glm::vec2(-2.0, 1.0), glm::vec2(-1.0, 1.0), glm::vec2(0.0, 1.0), glm::vec2(1.0, 1.0), glm::vec2(2.0, 1.0), glm::vec2(3.0, 1.0),
	glm::vec2(-3.0, 0.0), glm::vec2(-2.0, 0.0),glm::vec2(-1.0, 0.0), glm::vec2(0.0, 0.0), glm::vec2(1.0, 0.0), glm::vec2(2.0, 0.0), glm::vec2(3.0, 0.0),
	glm::vec2(-3.0, -1.0), glm::vec2(-2.0, -1.0), glm::vec2(-1.0, -1.0), glm::vec2(0.0, -1.0), glm::vec2(1.0, -1.0), glm::vec2(2.0, 1.0), glm::vec2(3.0, -1.0),
	glm::vec2(-3.0, -2.0), glm::vec2(-2.0, -2.0), glm::vec2(-1.0, -2.0), glm::vec2(0.0, -2.0), glm::vec2(1.0, -2.0), glm::vec2(2.0, -2.0), glm::vec2(3.0, -2.0),
	glm::vec2(-3.0, -3.0), glm::vec2(-2.0, -3.0),glm::vec2(-1.0, -3.0), glm::vec2(0.0, -3.0), glm::vec2(1.0, -3.0), glm::vec2(2.0, -3.0), glm::vec2(3.0, -3.0) };
const float maskFactor49 = float(1.0 / 112.0);
const float mask49[maskSize49] = {
	1.0 * maskFactor49, 2.0 * maskFactor49, 3.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49, 2.0 * maskFactor49, 1.0 * maskFactor49,
	2.0 * maskFactor49, 3.0 * maskFactor49, 4.0 * maskFactor49, 5.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49, 2.0 * maskFactor49,
	3.0 * maskFactor49, 4.0 * maskFactor49, 5.0 * maskFactor49, 6.0 * maskFactor49, 5.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49,
	4.0 * maskFactor49, 5.0 * maskFactor49, 6.0 * maskFactor49, 7.0 * maskFactor49, 6.0 * maskFactor49, 5.0 * maskFactor49, 4.0 * maskFactor49,
	3.0 * maskFactor49, 4.0 * maskFactor49, 5.0 * maskFactor49, 6.0 * maskFactor49, 5.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49,
	2.0 * maskFactor49, 3.0 * maskFactor49, 4.0 * maskFactor49, 5.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49, 2.0 * maskFactor49,
	1.0 * maskFactor49, 2.0 * maskFactor49, 3.0 * maskFactor49, 4.0 * maskFactor49, 3.0 * maskFactor49, 2.0 * maskFactor49, 1.0 * maskFactor49 };










