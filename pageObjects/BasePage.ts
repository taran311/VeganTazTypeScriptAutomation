
import {browser, element, by} from 'protractor';

export class BasePage {
  btnHome = element(by.css('#nav-index'));
  btnFatloss = element(by.css('#nav-fatloss'));
  btnExercise = element(by.css('#nav-exercise'));
  btnDiet = element(by.css('#nav-diet'));
  btnTraining = element(by.css('#nav-training'));
}