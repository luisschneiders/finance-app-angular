angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/bank-edit.html','<div class="container">\n    <div class="row">\n      <div class="col-sm-12">\n        <div class="alert alert-danger text-center" ng-if="data.isNull === true">\n          <h3>{{::data.notFound.message}}</h3>\n          <a class="text-capitalize" ng-href="{{data.notFound.url}}">Return to {{data.notFound.title}}</a>\n        </div>\n        <div ng-if="data.messages.error" role="alert" class="alert alert-danger">\n            <div ng-repeat="error in data.messages.error">{{error.msg}}</div>\n        </div>\n        <div ng-if="data.messages.success" role="alert" class="alert alert-success">\n          <div ng-repeat="success in data.messages.success">{{success.msg}}</div>\n        </div>\n        <form name="standardForm" ng-submit="updateBank(standardForm.$valid)" class="form-horizontal" ng-if="data.isNull === false">\n            <div ng-include src="\'partials/top.html\'"></div>\n            <div class="form-group">\n              <label for="bankDescription" class="col-sm-3">Description</label>\n              <div class="col-sm-7">\n                <input type="text" name="bankDescription" id="bankDescription" class="form-control" ng-model="data.bank.bankDescription" required>\n              </div>\n            </div>\n            <div class="form-group">\n              <label for="bankAccount" class="col-sm-3">Account</label>\n              <div class="col-sm-7">\n                <input type="text" name="bankAccount" id="bankAccount" class="form-control" ng-model="data.bank.bankAccount" required>\n              </div>\n            </div>\n            <div class="form-group">\n              <label for="bankIsActive" class="col-sm-3">Active</label>\n              <div class="col-sm-7">\n                <input type="checkbox" name="bankIsActive" ng-model="data.bank.bankIsActive" ng-checked="data.bank.bankIsActive === 1" ng-true-value="1" ng-false-value="0">\n              </div>\n            </div>\n            <div class="form-group">\n              <label for="bankInitialBalance" class="col-sm-3">Initial Balance</label>\n              <div class="col-sm-7">\n                <input type="text" name="bankInitialBalance" id="bankInitialBalance" class="form-control" ng-model="data.bank.bankInitialBalance" format="number" disabled>\n              </div>\n            </div>\n            <div class="form-group">\n              <label for="bankCurrentBalance" class="col-sm-3">Current Balance</label>\n              <div class="col-sm-7">\n                <input type="text" name="bankCurrentBalance" id="bankCurrentBalance" class="form-control" ng-model="data.bank.bankCurrentBalance" format="number">\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-sm-offset-3 col-sm-4">\n                <button type="submit" class="btn btn-success">Update</button>\n              </div>\n            </div>\n          </form>                    \n      </div>\n    </div>\n  </div>\n  ');
$templateCache.put('partials/bank.html','<div class="container">\n    <div class="row">\n      <div class="col-sm-12">\n        <div ng-include src="\'partials/top.html\'"></div>\n        <div id="no-more-tables">\n          <table class="table table-responsive table-striped table-hover table-cursor">\n            <thead>\n              <tr>\n                <th>Bank</th>\n                <th>Account</th>\n                <th class="text-right">Initial Balance</th>\n                <th class="text-right">Current Balance</th>\n                <th class="text-center">Active</th>\n                <th class="text-center">Edit</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class="loading text-center" ng-show="data.isLoading">\n                <td colspan="6">\n                  <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>\n                  <span class="sr-only">Loading...</span>\n                </td>\n              </tr>\n              <tr ng-repeat="item in data.banks | orderBy: \'-bankIsActive\' " ng-click="editBank(item.id)">\n                <td data-title="Bank" class="text-uppercase">{{::item.bankDescription}}</td>\n                <td data-title="Account" >{{::item.bankAccount}}</td>\n                <td data-title="Initial Balance"  class="text-right">{{::item.bankInitialBalance | number:2}}</td>\n                <td data-title="Current Balance"  class="text-right">{{::item.bankCurrentBalance | number:2}}</td>\n                <td data-title="Active"  class="text-center" ng-class="item.bankIsActive == 1 ? data.class.active : data.class.inactive">{{::item.bankIsActive == 1 ? "Yes" : "No"  }}</td>\n                <td data-title="Edit"  class="text-center"><i class="fa fa-edit fa-lg"></i></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  ');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/footer.html','<footer ng-controller="MenuCtrl">\n  <p class="text-center text-uppercase">\xA9 {{defaultsApp.year}} Schneiders Tech</p>\n</footer>');
$templateCache.put('partials/forgot.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="forgotPassword()">\n        <legend>Forgot Password</legend>\n        <div class="form-group">\n          <p>Enter your email address below and we\'ll send you password reset instructions.</p>\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <button type="submit" class="btn btn-success">Reset Password</button>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/home.html','<div class="container carousel-center">\n  <div class="row">\n    <div class="col-sm-12">\n        <div id="myCarousel" class="carousel slide" data-ride="carousel">\n          <ol class="carousel-indicators">\n            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n            <li data-target="#myCarousel" data-slide-to="1"></li>\n            <li data-target="#myCarousel" data-slide-to="2"></li>\n          </ol>\n            <!-- Indicators -->\n          \n            <!-- Wrapper for slides -->\n            <div class="carousel-inner">\n              <div class="item active"><i class="fa fa-line-chart fa-lg"></i><h3>Your transactions in graphics</h3></div>\n              <div class="item"><i class="fa fa-sliders fa-lg"></i><h3>Keep control of your records</h3></div>\n              <div class="item"><i class="fa fa-calendar fa-lg"></i><h3>Track your finance history</h3></div>\n            </div>          \n        </div>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/login.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="login()">\n        <legend>Log In</legend>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group"><a href="/forgot"><strong>Forgot your password?</strong></a></div>\n        <button type="submit" class="btn btn-success">Log in</button>\n      </form>\n      <!-- <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-google" ng-click="authenticate(\'google\')">Sign in with Google</button>\n      </div> -->\n    </div>\n  </div>\n  <p class="text-center">\n    Don\'t have an account? <a href="/signup"><strong>Sign up</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/main.html','<div class="container">\n    <div class="row">\n      <div class="col-sm-12">\n        <div ng-include src="\'partials/top.html\'"></div>\n        <div class="text-center select-period">\n          <a ng-click="changePeriod(\'d\')"><i class="fa fa-minus" aria-hidden="true"></i></a>\n          <span>{{data.year}}</span>\n          <a ng-click="changePeriod(\'i\')"><i class="fa fa-plus" aria-hidden="true"></i></a>\n        </div>\n        <div class="loading text-center" ng-show="data.isLoading">\n          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div class="row">\n          <div class="col-sm-12">\n            <span>Transactions Graphic:</span>\n          </div>\n          <div class="col-sm-offset-1 col-sm-10" ng-show="data.isNull">\n            <h3 class="alert alert-danger text-center">{{::data.notFound.message}}</h3>\n          </div>  \n          <div class="col-sm-offset-1 col-sm-10" ng-show="!data.isNull">\n            <canvas id="transactionChart"></canvas>\n          </div>\n        </div>\n      </div>\n      <div class="col-sm-12">\n        <div class="panel">\n          <div class="panel-body">\n            <h3>Expenses Graphic</h3>\n            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n              condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n              Donec sed odio dui.</p>\n            <a href="#" role="button" class="btn btn-default">View details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ');
$templateCache.put('partials/menu.html','<div ng-controller="MenuCtrl" class="nav-side-menu">\n    <div class="brand">\n      <span ng-if="!isAuthenticated()" class="navbar-logo text-center">\n        <img ng-src="{{defaultsApp.logo}}" alt="{{defaultsApp.alt}}" title="{{defaultsApp.title}}" width="{{defaultsApp.width}}">\n      </span>      \n      <span ng-if="isAuthenticated()" class="navbar-avatar">\n        <img ng-src="{{currentUser.picture || currentUser.gravatar}}">  {{currentUser.name || currentUser.email || currentUser.id}}\n      </span>\n    </div>\n    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>\n    <div class="menu-list">\n        <ul id="menu-content" ng-if="isAuthenticated()" class="menu-content collapse out">\n          <li><a href="/main/{{defaultsApp.year}}"><i class="fa fa-dashboard fa-lg"></i>Dashboard</a></li>\n          <li data-toggle="collapse" data-target="#setup" class="collapsed">\n              <a href="#"><i class="fa fa-cogs fa-lg"></i>Setup <span class="arrow"></span></a>\n          </li>\n          <ul class="sub-menu collapse" id="setup">\n              <!-- <li class="active"><a href="#">CSS3 Animation</a></li> -->\n              <li><a href="/all-banks">Banks</a></li>\n              <li><a href="/employer">Employers</a></li>\n              <li><a href="/expense-type">Expenses</a></li>\n              <li><a href="/transaction-type">Transactions Types</a></li>\n          </ul>\n          <ul>\n            <li><a href="/transactions"><i class="fa fa-money fa-lg"></i>Transactions</a></li>\n            <li><a href="/purchases"><i class="fa fa-shopping-cart fa-lg"></i>Purchases</a></li>\n            <li><a href="/account"><i class="fa fa-user fa-lg"></i>Profile</a></li>\n            <li><a href="#" ng-click="logout()"><i class="fa fa-sign-out fa-lg"></i>Logout</a></li>\n          </ul>\n        </ul>\n        <ul id="menu-content" ng-if="!isAuthenticated()" class="menu-content collapse out text-center">\n          <li><a href="/login">Log in</a></li>\n          <li><a href="/signup">Sign up</a></li>\n        </ul>         \n    </div>\n</div>');
$templateCache.put('partials/profile.html','<div class="container">\n  <div ng-include src="\'partials/top.html\'"></div>\n  <div ng-if="messages.error" role="alert" class="alert alert-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="alert alert-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n  <form ng-submit="updateProfile()" class="form-horizontal">\n    <div class="form-group">\n      <label for="email" class="col-sm-3">Email</label>\n      <div class="col-sm-7">\n        <input type="email" name="email" id="email" class="form-control" ng-model="profile.email">\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="name" class="col-sm-3">Name</label>\n      <div class="col-sm-7">\n        <input type="text" name="name" id="name" class="form-control" ng-model="profile.name">\n      </div>\n    </div>\n    <div class="form-group">\n      <label class="col-sm-3">Gender</label>\n      <div class="col-sm-4">\n        <label class="radio-inline radio col-sm-4">\n          <input type="radio" name="gender" value="male" ng-model="profile.gender" ng-checked="profile.gender === \'male\'"><span>Male</span>\n        </label>\n        <label class="radio-inline col-sm-4">\n          <input type="radio" name="gender" value="female" ng-model="profile.gender" ng-checked="profile.gender === \'female\'"><span>Female</span>\n        </label>\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="location" class="col-sm-3">Location</label>\n      <div class="col-sm-7">\n        <input type="text" name="location" id="location" class="form-control" ng-model="profile.location">\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="website" class="col-sm-3">Website</label>\n      <div class="col-sm-7">\n        <input type="text" name="website" id="website" class="form-control" ng-model="profile.website">\n      </div>\n    </div>\n    <div class="form-group">\n      <label class="col-sm-3">Gravatar</label>\n      <div class="col-sm-4">\n        <img ng-src="{{profile.gravatar}}" class="profile" width="100" height="100">\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-sm-offset-3 col-sm-4">\n        <button type="submit" class="btn btn-success">Update Profile</button>\n      </div>\n    </div>\n  </form>\n  <form ng-submit="changePassword()" class="form-horizontal">\n    <legend><h4 class="text-capitalize title-border-left">Password</h4></legend>\n    <div class="form-group">\n      <label for="password" class="col-sm-3">New Password</label>\n      <div class="col-sm-7">\n        <input type="password" name="password" id="password" class="form-control" ng-model="profile.password">\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="confirm" class="col-sm-3">Confirm Password</label>\n      <div class="col-sm-7">\n        <input type="password" name="confirm" id="confirm" class="form-control" ng-model="profile.confirm">\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-sm-4 col-sm-offset-3">\n        <button type="submit" class="btn btn-success">Change Password</button>\n      </div>\n    </div>\n  </form>\n  <div class="form-horizontal">\n    <legend><h4 class="text-capitalize title-border-left">Linked Accounts</h4></legend>\n    <div class="form-group">\n      <div class="col-sm-offset-3 col-sm-4">\n        <p>\n          <a href="#" ng-click="unlink(\'google\')" ng-if="currentUser.google" class="text-danger">Unlink your Google account</a>\n          <a href="#" ng-click="link(\'google\')" ng-if="!currentUser.google">Link your Google account</a>\n        </p>\n      </div>\n    </div>\n  </div>\n  <form ng-submit="deleteAccount()" class="form-horizontal">\n    <legend><h4 class="text-capitalize title-border-left">Account</h4></legend>\n    <div class="form-group">\n      <p class="col-sm-offset-3 col-sm-9">You can delete your account, but keep in mind this action is irreversible.</p>\n      <div class="col-sm-offset-3 col-sm-9">\n        <button type="submit" class="btn btn-danger" disabled>Delete my account</button>\n      </div>\n    </div>\n  </form>\n</div>\n');
$templateCache.put('partials/reset.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n        <form ng-submit="resetPassword()">\n          <legend>Reset Password</legend>\n          <div class="form-group">\n            <label for="password">New Password</label>\n            <input type="password" name="password" id="password" placeholder="New password" class="form-control" ng-model="user.password" autofocus>\n          </div>\n          <div class="form-group">\n            <label for="confirm">Confirm Password</label>\n            <input type="password" name="confirm" id="confirm" placeholder="Confirm password" class="form-control" ng-model="user.confirm">\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-success">Change Password</button>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/signup.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="signup()">\n        <legend>Create an account</legend>\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" name="name" id="name" placeholder="Name" class="form-control" ng-model="user.name" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group">\n          <small class="text-muted">By signing up, you agree to the <a href="/">Terms of Service</a>.</small>\n        </div>\n        <button type="submit" class="btn btn-success">Create an account</button>\n      </form>\n      <!-- <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n        <button class="btn btn-google" ng-click="authenticate(\'google\')">Sign in with Google</button>\n      </div> -->\n    </div>\n  </div>\n  <p class="text-center">\n    Already have an account? <a href="/login"><strong>Log in</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/top.html','<div ng-controller="TopCtrl">\n  <div class="row fixed-row">\n    <div class="col-xs-6 col-sm-4">\n      <h4 class="text-capitalize title-border-left">{{default.title}}</h4>\n    </div>\n    <div class="col-xs-6 col-sm-offset-4 col-sm-4 text-right" ng-if="default.show === true">\n      <a ng-href="{{default.url}}" class="btn btn-primary">New</a>\n    </div>\n  </div>\n</div>');}]);